import * as yup from 'yup';

const formSchema = yup.object().shape({
    customerName: yup   
        .string()
        .required()
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .required('please select size of your pie'),
    sauce: yup
        .string(),
    Pepperoni: yup
        .boolean(),
    Sausage: yup
        .boolean(),
    CanadianBacon: yup
        .boolean(),
    SpicyItalianSausage: yup
        .boolean(),
    onions: yup
        .boolean(),
    GreenPeppers: yup
        .boolean(),
    DicedTomatoes: yup
        .boolean(),
    BlackOlives: yup
        .boolean(),
    RoastedGarlic: yup
        .boolean(),
    ArtichokeHearts: yup
        .boolean(),
    ThreeCheese: yup
        .boolean(),
    Pineapple: yup
        .boolean(),
    ExtraCheese: yup
        .boolean(),
    special: yup
        .string(),
});

export default formSchema;