import { useState } from "react"


export const useForm = (initialState) => {
  
    const [formValues, setFormValues] = useState(initialState)

    const onChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const reset = () => {
        setFormValues(initialState)
    }


    return { formValues, onChange, reset }

}
