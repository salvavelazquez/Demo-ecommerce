import { IloginErrors, IloginProps, IRegisterErrors, IRegisterProps } from "@/interfaces";

export function validateLoginForm (values: IloginProps) {
    const errors: IloginErrors = {};

    if (!values.email) {
        errors.email = " ";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid";
    }

    if (!values.password) {
        errors.password = " ";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }

    return errors;
};

export function validateRegisterForm (values: IRegisterProps) {
    const errors: IRegisterErrors = {};

    // Validación del email
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid";
    }

    // Validación de la contraseña
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }

    // Validación del nombre
    if (!values.name) {
        errors.name = "Name is required";
    } else if (values.name.length < 3) {
        errors.name = "Name must be at least 3 characters";
    }

    // Validación de la dirección
    if (!values.address) {
        errors.address = "Address is required";
    } else if (values.address.length < 5) {
        errors.address = "Address must be at least 5 characters";
    }

    // Validación del teléfono
    if (!values.phone) {
        errors.phone = "Phone is required";
    } else if (!/^\+?\d{7,15}$/.test(values.phone)) {
        errors.phone = "Phone must be a valid number (7-15 digits)";
    }
    return errors;
};