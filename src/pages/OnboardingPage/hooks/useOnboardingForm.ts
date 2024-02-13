import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  NICKNAMES,
  GENDER_DICT,
  WORRY_DICT,
  type Gender,
  type Worry,
} from '@/constants/users';

export const formLiteral = {
  year: {
    min: 1800,
    max: new Date().getFullYear(),
    length: 4,
  },
  month: {
    min: 1,
    max: 12,
    length: 2,
  },
  day: {
    min: 1,
    max: 31,
    length: 2,
  },
  worries: {
    min: 1,
    max: 3,
  },
} as const;

const L = formLiteral;

const [gender, ...otherGender] = Object.keys(GENDER_DICT) as Gender[];
const [worry, ...otherWorries] = Object.keys(WORRY_DICT) as Worry[];

export const formSchema = z.object({
  nickname: z.enum(NICKNAMES),
  birthday: z.object({
    year: z.coerce.number().int().min(L.year.min).max(L.year.max),
    month: z.coerce.number().int().min(L.month.min).max(L.month.max),
    day: z.coerce.number().int().min(L.day.min).max(L.day.max),
  }),
  gender: z.enum([gender, ...otherGender]),
  worries: z
    .array(z.enum([worry, ...otherWorries]))
    .min(L.worries.min)
    .max(L.worries.max),
});

export const initialSchema = formSchema.omit({ birthday: true }).extend({
  birthday: z.object({
    year: z.literal(''),
    month: z.literal(''),
    day: z.literal(''),
  }),
});

export type Inputs = z.infer<typeof formSchema>;
type InitialInputs = z.infer<typeof initialSchema>;

const useOnboardingForm = () =>
  useForm<InitialInputs, void, Inputs>({
    defaultValues: {
      nickname: NICKNAMES[0],
      birthday: {
        year: '',
        month: '',
        day: '',
      },
      gender: undefined,
      worries: [],
    },
    resolver: zodResolver(formSchema),
  });

export default useOnboardingForm;
