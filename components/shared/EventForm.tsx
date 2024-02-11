'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { eventFormSchema } from "@/lib/validator"
import * as z from "zod"
import { eventDefaultValues } from "@/constants"
import DropDown from "./DropDown"
import { Textarea } from "@/components/ui/textarea"
import { FileUploader } from "./FileUploader"
import Image from "next/image"
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



type EventFormProps = {
    userId: string,
    type: "Create" | "Update",
}

const EventForm = ({ userId, type }: EventFormProps) => {

    const initialValues = eventDefaultValues;
    const [files, setFiles] = useState<File[]>([]);

    // 1. Define your form.
const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues
})

// 2. Define a submit handler.
function onSubmit(values: z.infer<typeof eventFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
}

return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 md:flex-row">

                {/* TITLE Form Field */}
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                    <FormItem className="w-full">
                        <FormControl>
                            <Input 
                                placeholder="Event Title" {...field} 
                                className="input-field"/>
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )}
                />

                {/* CATEGORY Form Field */}
                <FormField
                    control={form.control}
                    name="categoryId"
                    render={({ field }) => (
                    <FormItem className="w-full">
                        <FormControl>
                            <DropDown 
                                onChangeHandler={field.onChange} value={field.value}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
            </div>

            {/* DESCRIPTION Form Field */}
            <div className="flex flex-col gap-5 md:flex-row">
                <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl className="h-72">
                                <Textarea 
                                    placeholder="Description" {...field} 
                                    className="textarea rounded-2xl"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

            {/* IMAGE Uploadthing DropZone */}
                <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                    <FormItem className="w-full">
                        <FormControl className="h-72">
                            <FileUploader 
                                onFieldChange={field.onChange}
                                imageUrl={field.value}
                                setFiles={setFiles}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
            </div>

            {/* LOCATION Form Field */}
            <div className="flex flex-col gap-5 md:flex-row">
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                    <FormItem className="w-full">
                        <FormControl>
                            <div className="flex-center h-[55px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                                <Image 
                                    src='/assets/icons/location-grey.svg'
                                    alt="location"
                                    width={24}
                                    height={24}
                                />
                            <Input 
                                placeholder="Location / Online Event" {...field} 
                                className="input-field"/>
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
            </div>

            {/* START DATE Form Field */}
            <div className="flex flex-col gap-5 md:flex-row">
                <FormField
                    control={form.control}
                    name="startDateTime"
                    render={({ field }) => (
                    <FormItem className="w-full">
                        <FormControl>
                            <div className="flex-center h-[55px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                                <Image 
                                    src='/assets/icons/calendar.svg'
                                    alt="calender"
                                    width={24}
                                    height={24}
                                />
                                <p className="ml-3 whitespace-nowrap text-gray-600">
                                    Start Date:
                                </p>
                                <DatePicker 
                                    selected={field.value} 
                                    onChange={(date : Date) => field.onChange(date)}
                                    showTimeSelect
                                    timeInputLabel="Time:"
                                    dateFormat={"MM/dd/yyyy h:mm aa"}
                                    wrapperClassName="datePicker"
                                />
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />

            {/* END DATE Form Field */}
                <FormField
                    control={form.control}
                    name="endDateTime"
                    render={({ field }) => (
                    <FormItem className="w-full">
                        <FormControl>
                            <div className="flex-center h-[55px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                                <Image 
                                    src='/assets/icons/calendar.svg'
                                    alt="calender"
                                    width={24}
                                    height={24}
                                    className="filter-grey"
                                />
                                <p className="ml-3 whitespace-nowrap text-gray-600">
                                    End Date:
                                </p>
                                <DatePicker 
                                    selected={field.value} 
                                    onChange={(date : Date) => field.onChange(date)}
                                    showTimeSelect
                                    timeInputLabel="Time:"
                                    dateFormat={"MM/dd/yyyy h:mm aa"}
                                    wrapperClassName="datePicker"
                                />
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
            </div>

                <Button type="submit">Submit</Button>
        </form>
    </Form>
)
}

export default EventForm