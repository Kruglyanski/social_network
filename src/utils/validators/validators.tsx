export const maxValue = (max: number) => (value: string) =>
    value.length < max ? undefined : `Should be less than ${max}`
export const minValue = (min: number) => (value: string) =>
    value.length >= min ? undefined : `Should be greater than ${min}`

export const required = (value: string | number) => (value ? undefined : 'Required')
export const mustBeNumber = (value: number) => (isNaN(value) ? 'Must be a number' : undefined)
export const mustBeTrue = (value: boolean) => (!value ? 'Must be true' : undefined)

export const composeValidators = (...validators: Array<ValidatorType>) => (value: string) =>
    validators.reduce((error: any, validator: any) => error || validator(value), undefined)

export type ValidatorType = ((value: string) => string | undefined) | ((value: number) => string | undefined)

