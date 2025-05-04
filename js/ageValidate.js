export default function ageVerify (field) {
    const birthDate = new Date(field.value);
    ageValidate(birthDate);
    if (!ageValidate(birthDate)) {
        field.setCustomValidity('O usuário não é maior de idade')
    }
}

function ageValidate(date) {
    const dateNow = new Date()
    const dateMajor18 = new Date (date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return dateNow >= dateMajor18;
}

