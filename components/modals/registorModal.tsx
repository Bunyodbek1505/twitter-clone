"use client"
import useRegisterModal from '@/hooks/useRegisterModal'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Modal from '../ui/modal'
import { X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { registerStep1Schema } from '@/lib/validation'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import Button from '../ui/button'

const RegistorModal = () => {
    const [step, setStep] = useState( 1 )
    const [data, setData] = useState({name: "", email: ""})
    const registerModal = useRegisterModal()

    const bodyContent = step === 1 ? <RegisterStep1 setData={setData} /> : <RegisterStep2 />
    const footer = <div className='text-neutral-400 text-center mt-4'>
        <p>Already have to account?
        <span className='text-white cursor-pointer hover:underline'>Sign In</span></p>
    </div>

    return (
        <Modal
            body={bodyContent}
            footer={footer}
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            step={step}
            totalSteps={2}
        />
    )
}

export default RegistorModal


function RegisterStep1( { setData }: { setData: Dispatch<SetStateAction<{ name: string, email: string}>>} ) {

    const form = useForm<z.infer<typeof registerStep1Schema>>( {
        resolver: zodResolver( registerStep1Schema ),
        defaultValues: {
            email: "",
            name: "",
        },
    } );

    function onSubmit( values: z.infer<typeof registerStep1Schema> ) {
        console.log( values )
    }

    const { isSubmitting } = form.formState;

    return <Form {...form}>
        <form onSubmit={form.handleSubmit( onSubmit )} className="space-y-4 px-3">
            <FormField
                control={form.control}
                name="name"
                render={( { field } ) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="Name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={( { field } ) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button label={"Next"} type='submit' secondary fullWidth large disabled={isSubmitting} />
        </form>
    </Form>
}
function RegisterStep2() {
    return (
        <div>Registor step 2</div>
    )
}