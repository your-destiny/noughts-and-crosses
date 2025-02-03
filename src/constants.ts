import { ItemTypes } from './enums';

export const classes = {
	[ItemTypes.Crosses]: 'noughtsAndCrossesFieldItemCrosses',
	[ItemTypes.Noughts]: 'noughtsAndCrossesFieldItemNoughts',
};

export const defaultResult = {
	win: false,
	message: 'Начните игру!',
};

export const labels = {
	[ItemTypes.Crosses]: 'Нолики',
	[ItemTypes.Noughts]: 'Крестики',
};

export const itemTypesLabels = {
	[ItemTypes.Crosses]: 'X',
	[ItemTypes.Noughts]: 'O',
};

export const itemTypesLabelsReverse = {
	X: ItemTypes.Crosses,
	O: ItemTypes.Noughts,
};
