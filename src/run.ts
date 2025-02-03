import { classes, itemTypesLabelsReverse } from './constants';
import { GripTypes, ItemTypes } from './enums';
import NoughtsAndCrosses from './NoughtsAndCrosses';
import { Coordinate, TypesLabelsReverse } from './types';

const getFieldCell = (coordinates: Coordinate) => `
	<button
		data-coordinates='${JSON.stringify(coordinates)}'
		class="noughtsAndCrossesFieldItem"
    >
    	<span class="noughtsAndCrossesFieldItemEmpty" />
    </button>
		`;

const generateField = (size: number) =>
	Array.from({ length: Math.pow(size, 2) }, (_, i) =>
		getFieldCell({
			[GripTypes.Rows]: Math.floor(i / size),
			[GripTypes.Columns]: i % size,
		}),
	).join('\n');

export const run = () => {
	const start = document.querySelector<HTMLDivElement>('#start');
	const first = document.querySelector<HTMLSelectElement>('#first')!;
	const size = document.querySelector<HTMLInputElement>('#size')!;
	start!.addEventListener(
		'click',
		() => {
			start!.setAttribute('id', 'restart');
			start!.innerText = 'Начать снова';
			start!.addEventListener('click', () => window.location.reload(), {
				once: true,
			});
			first!.setAttribute('disabled', 'disabled');
			size!.setAttribute('disabled', 'disabled');
			_run(first.value as TypesLabelsReverse, Number(size.value));
		},
		{ once: true },
	);
};

export const _run = (
	first: keyof typeof itemTypesLabelsReverse,
	size: number,
) => {
	const noughtsAndCrosses = new NoughtsAndCrosses(
		itemTypesLabelsReverse[first],
		size,
	);

	const field = generateField(size);

	const fieldElement = document.querySelector<HTMLDivElement>(
		'#noughtsAndCrossesField',
	);

	fieldElement?.setAttribute(
		'style',
		`grid-template-columns: repeat(${size}, 1fr);grid-template-rows: repeat(${size}, 1fr)`,
	);

	fieldElement!.innerHTML = field;

	const elements: NodeListOf<HTMLElement> = document.querySelectorAll(
		'.noughtsAndCrossesFieldItem',
	);

	const result = document.querySelector<HTMLSpanElement>('#result');

	result!.innerText = noughtsAndCrosses.result.message;

	const elementsClick = (el: HTMLElement) => () => {
		const currentClass = el.firstElementChild?.classList.value;

		if (
			noughtsAndCrosses.result.win ||
			!currentClass ||
			currentClass === classes[ItemTypes.Crosses] ||
			currentClass === classes[ItemTypes.Noughts]
		) {
			return;
		}

		el.firstElementChild?.classList.replace(
			currentClass,
			classes[noughtsAndCrosses.type],
		);

		const coordinate = el.dataset.coordinates;

		if (!coordinate) {
			return;
		}
		noughtsAndCrosses.switchType();
		noughtsAndCrosses.coordinates = coordinate;
		noughtsAndCrosses.refreshResult();

		result!.innerText = noughtsAndCrosses.result.message;

		if (noughtsAndCrosses.result.win) {
			result!.setAttribute('style', 'color:green');
		}
	};

	elements.forEach(el => {
		el.addEventListener('click', elementsClick(el), { once: true });
	});
};
