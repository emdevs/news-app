import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import React, {useState, useEffect} from "react";
import App from './App';


let mock_data = {
    result: {
        categoryList: [
            {id: 0, name: "Celebrity"},
            {id: 1, name: "Sports"},
            {id: 2, name: "Gossip"}
        ],
        categories: [
            {id: 0, name: "Celebrity", templates: [
                {
                    id: "subsection_id",
                    title: "Subsection title",
                    sections: [
                        { articles: [
                            //individual articles (id, title, thumnail.hash url.url)
                            {
                                id: "article_id",
                                title: "article title",
                                thumbnail: {hash: "img hash"},
                                url: {url: "https://exampleurl.com"}
                            }
                        ] }
                    ]
                }
            ]}
        ]
    }
};

beforeEach(async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(mock_data)
    })
    await waitFor(() => render(<App />));
});

afterEach(() => {
    jest.restoreAllMocks();
});


test("bookmarks link loads", () => {
    const bookmarksLink = screen.getByText(/bookmarks/i);
    expect(bookmarksLink).toBeInTheDocument(); 
})

test("category links load", () => {
    const top_link = screen.getByText(/Celebrity/i);
    const sports_link = screen.getByText(/Sports/);
    const gossip_link = screen.getByText(/Gossip/);


    expect(top_link).toBeInTheDocument();
    expect(sports_link).toBeInTheDocument();
    expect(gossip_link).toBeInTheDocument();
});

test("if category nav link clicked, its articles show up", () => {
    const top_link = screen.getByText(/Celebrity/i);
    userEvent.click(top_link);

    const article_title = screen.getByText(/article title/);
    expect(article_title).toBeInTheDocument();

});