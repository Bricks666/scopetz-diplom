export interface CommonProps {
	className?: string;
}

interface SinglePickerProps<T> {
	readonly onChange: (value: T | null) => unknown;
	readonly value: T | null;
	readonly multiple?: never;
	readonly limitTags?: never;
}

interface MultiplePickerProps<T> {
	readonly onChange: (value: T[]) => unknown;
	readonly value: T[];
	readonly multiple: true;
	readonly limitTags?: number;
}

export type PickerProps<T> = SinglePickerProps<T> | MultiplePickerProps<T>;
