import jsdom from 'jsdom';

import {
	createElementAttribute,
	createElement,
	createHeaderEl,
	createCardEl,
	createMainEl,
	createFooterEl,
} from '../js/util.js';

const { JSDOM } = jsdom;
const { test } = QUnit;

QUnit.module('DOM', (hooks) => {
	hooks.beforeEach(() => {
		const { document } = new JSDOM(
			`<!DOCTYPE html><html><body></body></html>`
		).window;
		global.document = document;
	});

	test("should be able to create element via 'createElement' function", (assert) => {
		const divEl = createElement('div', 'wrapper', 'Some content');
		document.body.appendChild(divEl);

		const isDivElExist = !!document.querySelector('.wrapper');
		assert.ok(isDivElExist);
	});

	test("should be able to return element attribute data via 'createElementAttribute' function", (assert) => {
		const altData = createElementAttribute('alt', 'drawer');

		const expectedAltData = {
			name: 'alt',
			value: 'drawer',
		};

		assert.deepEqual(altData, expectedAltData);
	});

	test("should be able to create header element via 'createHeaderEl' function", (assert) => {
		const headerEl = createHeaderEl();
		document.body.appendChild(headerEl);

		const isHeaderElExist = !!document.querySelector('header');
		assert.ok(isHeaderElExist);
	});

	test("should be able to create card element via 'createCardEl' function", (assert) => {
		const cardEl = createCardEl();
		document.body.appendChild(cardEl);

		const isCardElExist = !!document.querySelector('.card');
		assert.ok(isCardElExist);
	});

	test("should be able to create main element via 'createMainEl' function", (assert) => {
		const mainEl = createMainEl();
		document.body.appendChild(mainEl);

		const isMainElExist = !!document.querySelector('main');
		assert.ok(isMainElExist);
	});

	test("should be able to create footer element via 'createFooterEl' function", (assert) => {
		const footerEl = createFooterEl();
		document.body.appendChild(footerEl);

		const isFooterElExist = !!document.querySelector('footer');
		assert.ok(isFooterElExist);
	});
});
