import { itemTypesLabelsReverse } from "./constants";
import { GripTypes, ItemTypes } from "./enums";

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
    win: boolean;
    message: string;
};

export type TypesLabelsReverse = keyof typeof itemTypesLabelsReverse;