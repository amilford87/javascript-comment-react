import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Comment from './Comment';


test('Renders Comment Component', () => {
    const { getByText } = render(<Comment />);
    const linkElement = getByText(/REPLY/i);
    expect(linkElement).toBeInTheDocument();
});

test('Name exists and is the right name', () => {
    const { getByText } = render(<Comment />);
    const linkElement = getByText(/Brad/i);
    expect(linkElement).toBeInTheDocument();
});

test('Avatar exists', () => {
    const { getByAltText } = render(<Comment />);
    const linkElement = getByAltText(/avatar/i);
    expect(linkElement).toBeInTheDocument();
});

test('author badge exists', () => {
    const { getByText } = render(<Comment />);
    const linkElement = getByText(/AUTHOR/i);
    expect(linkElement).toBeInTheDocument();
});

test('time posted is there and is correct', () => {
    const { getByText } = render(<Comment />);
    const linkElement = getByText(/2 MINUTES AGO/i);
    expect(linkElement).toBeInTheDocument();
});

test('Message exists and is right', () => {
    const { getByText } = render(<Comment />);
    const linkElement = getByText(/So what the German/i);
    expect(linkElement).toBeInTheDocument();
});

test('Reply Button Works', () => {
    const { getByText } = render(<Comment />);
    window.alert = jest.fn();
fireEvent.click(
    getByText('REPLY'));
    expect(window.alert).toHaveBeenCalledTimes(1);
});

test('Replies Button Works', () => {
    const { getByText } = render(<Comment />);
    window.alert = jest.fn();
fireEvent.click(
    getByText('REPLIES'));
    expect(window.alert).toHaveBeenCalledTimes(1);
});

test('upVotes Button Works', () => {
    const upVotesClick = jest.fn();
    const { getByTestId } = render(<button id="up-votes" className="button" onClick={upVotesClick} data-testid="upVote"></button>);
    fireEvent.click(
    getByTestId('upVote'));
    expect(upVotesClick).toHaveBeenCalled();
});

test('downVotes Button Works', () => {
    const downVotesClick = jest.fn();
    const { getByTestId } = render(<button id="down-votes" className="button" onClick={downVotesClick} data-testid="downVote"></button>);
    fireEvent.click(
    getByTestId('downVote'));
    expect(downVotesClick).toHaveBeenCalled();
});

