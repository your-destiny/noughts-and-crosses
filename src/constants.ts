import { ItemTypes, ResultStatus } from './enums';

export const classes = {
	[ItemTypes.Crosses]: 'noughtsAndCrossesFieldItemCrosses',
	[ItemTypes.Noughts]: 'noughtsAndCrossesFieldItemNoughts',
};

export const resultStatusMessages = {
	[ResultStatus.Pending]: 'Начните игру!',
	[ResultStatus.InProgress]: 'Игра в процессе!',
	[ResultStatus.Draw]: 'Игра закончена! Ничья!',
	[ResultStatus.Win]: 'Игра закончена! Победили ',
};

export const defaultResult = {
	status: ResultStatus.Pending,
	message: resultStatusMessages[ResultStatus.Pending],
};

export const labels = {
	[ItemTypes.Crosses]: 'нолики',
	[ItemTypes.Noughts]: 'крестики',
};

export const itemTypesLabels = {
	[ItemTypes.Crosses]: 'X',
	[ItemTypes.Noughts]: 'O',
};

export const itemTypesLabelsReverse = {
	X: ItemTypes.Crosses,
	O: ItemTypes.Noughts,
};

export const resultStatusColor = {
	[ResultStatus.Pending]: 'AliceBlue',
	[ResultStatus.InProgress]: 'Bisque',
	[ResultStatus.Draw]: 'Gold',
	[ResultStatus.Win]: 'Green',
};