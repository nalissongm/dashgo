import { FormLabel, FormControl, Input as ChackraInput, InputProps as ChackraInputProps, FormErrorMessage } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction} from 'react';
import { FieldError} from "react-hook-form";

interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
({name, label, error = null, ...rest}, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChackraInput
        id={name} 
        name={name}
        focusBorderColor='pink.500'
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        ref={ref}
        size="lg"
        {...rest}
      /> 

      { !!error && (
        <FormErrorMessage>{error.message}</FormErrorMessage>
      )}
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);