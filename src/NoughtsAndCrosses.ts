import { defaultResult, labels, resultStatusMessages } from './constants';
import { ItemTypes, GripTypes, ResultStatus } from './enums';
import { Field, Result, Coordinate } from './types';

class NoughtsAndCrosses {
	private _coordinates: Field;
	private _result: Result;
	private _type: ItemTypes;
	private _size: number;

	constructor(type: ItemTypes, size: number) {
		this._type = type;
		this._coordinates = {
			[ItemTypes.Crosses]: this.getGridMap(),
			[ItemTypes.Noughts]: this.getGridMap(),
		};

		this._result = defaultResult;
		this._size = size;
	}

	get result() {
		return this._result;
	}

	get type() {
		return this._type;
	}

	set coordinates(coordinate: string) {
		const coordinateJSON: Coordinate = JSON.parse(coordinate);

		this._coordinates[this._type][GripTypes.Rows] = [
			...this.currentRows,
			coordinateJSON[GripTypes.Rows],
		];
		this._coordinates[this._type][GripTypes.Columns] = [
			...this.currentColumns,
			coordinateJSON[GripTypes.Columns],
		];
	}

	switchType = () =>
		(this._type =
			this._type === ItemTypes.Noughts
				? ItemTypes.Crosses
				: ItemTypes.Noughts);

	refreshResult = () => {
		if (
			this.checkedCurrentRows ||
			this.checkedCurrentColumns ||
			this.checkedDiagonal
		) {
			this._result.message = `${resultStatusMessages[ResultStatus.Win]} ${this.winLabel}!`;
			this._result.status = ResultStatus.Win;
			return;
		}

		if (this.checkedLast) {
			this._result.status = ResultStatus.Draw;
			this._result.message = resultStatusMessages[ResultStatus.Draw];
			return;
		}

		this._result.status = ResultStatus.InProgress;
		this._result.message = resultStatusMessages[ResultStatus.InProgress];
	};

	private get currentRows() {
		return this._coordinates[this._type][GripTypes.Rows];
	}

	private get currentColumns() {
		return this._coordinates[this._type][GripTypes.Columns];
	}
	
	private get checkedCurrentRows() {
		return this.getCheckedCurrent(this.currentRows);
	}

	private get checkedCurrentColumns() {
		return this.getCheckedCurrent(this.currentColumns);
	}

	private get checkedDiagonal() {
		const main =
			this.currentRows.filter(
				(el, index) => el === this.currentColumns[index],
			).length === this._size;

		const side =
			this.currentColumns.filter(
				(el, index) => el === this._size - this.currentRows[index] - 1,
			).length === this._size;

		return main || side;
	}

	private get checkedLast() {
		const crosses = this._coordinates[ItemTypes.Crosses][GripTypes.Rows];
		const noughts = this._coordinates[ItemTypes.Noughts][GripTypes.Rows];

		return [...crosses, ...noughts].length === Math.pow(this._size, 2);
	}

	private get winLabel() {
		return labels[this._type];
	}

	private getGridMap = () => ({
		[GripTypes.Rows]: [],
		[GripTypes.Columns]: [],
	});

	private getCheckedCurrent(data: number[]) {
		const temp = data.reduce<Record<number, number>>(
			(acc, cur) =>
				acc[cur]
					? { ...acc, [cur]: acc[cur] + 1 }
					: { ...acc, [cur]: 1 },
			{},
		);

		return Object.values(temp).find(el => el === this._size);
	}
}

export default NoughtsAndCrosses;
