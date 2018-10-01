import React from 'react'
import ReactDOM from 'react-dom'
import DumbComponent from '../components/DumbComponent'
import { syncAction } from '../action/actions';

function sum(a, b) {
	return a + b;
}

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('DumbComponent renders just fine', () => {
	const container = document.createElement('div')
	ReactDOM.render(<DumbComponent />, container)
})