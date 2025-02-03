import { itemTypesLabelsReverse } from "./constants";
import { GripTypes, ItemTypes, ResultStatus } from "./enums";

export type GripTypesObject = {
    [GripTypes.Rows]: number[];
    [GripTypes.Columns]: number[];
};

export type Field = {
    [ItemTypes.Crosses]: GripTypesObject;
    [ItemTypes.Noughts]: GripTypesObject;
};

export type Coordinate = {
    [GripTypes.Rows]: number;
    [GripTypes.Columns]: number;
};


export type Result = {
    status: ResultStatus;
    message: string;
};

export type TypesLabelsReverse = keyof typeof itemTypesLabelsReverse;