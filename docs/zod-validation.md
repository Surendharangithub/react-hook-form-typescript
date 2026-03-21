# Zod Validation and Hook Form

## Overview

- In this project we are using Zod validation and React Hook Form to handle form submission to the backend.
- We have simple fields like name, email and gender.
- Based on the selected gender, father's name or mother's name field will be shown conditionally.

# Example Code

``` ts
const methods = useForm();
```
## Libraries Used

- [zod](https://zod.dev) — schema validation
- [react-hook-form](https://react-hook-form.com) — form state management

## Fields

| Field | Type | Required |
|---|---|---|
| Name | Text | Yes |
| Email | Email | Yes |
| Gender | Enum (Male/Female) | Yes |
| Father's name | Text | Conditional |
| Mother's name | Text | Conditional |

## Notes

- `z.preprocess` is used on the gender field to convert empty string `""` to `undefined` before Zod validation.
- `FormProvider` and `useFormContext` are used to avoid prop drilling across field components.