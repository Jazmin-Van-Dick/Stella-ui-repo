// File: CustomDatePicker.tsx
import React, { useState } from "react";
import { Modal, TouchableOpacity } from "react-native";
import { Div, Input, Text, Button } from "react-native-magnus";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CalendarIcon } from "../Icons";

interface CustomDatePickerProps {
    label?: string;
    placeholder: string;
    value?: Date;
    onChange?: (date: Date) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ label, placeholder, value, onChange }) => {
    const [showPicker, setShowPicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);

    const handleConfirm = (event: any, date?: Date) => {
        setShowPicker(false);
        if (date) {
            setSelectedDate(date);
            onChange && onChange(date);
        }
    };

    const formattedDate = selectedDate
        ? selectedDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
        : "";

    return (
        <Div mb="xl">
            <TouchableOpacity onPress={() => setShowPicker(true)}>
                <Input
                    h={56}
                    fontSize={16}
                    borderColor="gray300"
                    rounded="md"
                    placeholder={placeholder}
                    placeholderTextColor="#64748B"
                    value={formattedDate}
                    editable={false}
                    suffix={<CalendarIcon />}
                />

                { selectedDate && (
                    <Div
                        position="absolute"
                        left={12}
                        top={4}
                    >
                        <Text
                            color="#64748B"
                        >
                            {label}
                        </Text>
                    </Div>
                )}
            </TouchableOpacity>

            {showPicker && (
                <Modal transparent animationType="slide">
                    <DateTimePicker
                        value={selectedDate || new Date()}
                        mode="date"
                        display="spinner"
                        onChange={handleConfirm}
                    />
                </Modal>
            )}
        </Div>
    );
};

export default CustomDatePicker;
