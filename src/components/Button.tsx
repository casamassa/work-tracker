// src/components/Button.tsx
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

type ButtonProps = {
    variant?: ButtonVariant;
    onClick?: () => void;
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
    const variantClasses = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white',
        secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
        danger: 'bg-red-600 hover:bg-red-700 text-white',
    }[variant];

    return (
        <button
            className={`rounded px-4 py-2 transition ${variantClasses}`} 
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;