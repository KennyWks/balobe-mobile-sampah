import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import DatePickerInput from "react-native-date-picker";
import {TouchableOpacity} from "react-native-gesture-handler";
import {colors, fonts} from "../../../utils";
import moment from "moment";
import "moment/locale/id";

function DatePicker({label, onChoose, value}) {
  const [date, setDate] = useState(value);
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>{label}</Text>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={styles.input}>
          {date === "Tanggal Lahir" && <Text>Tanggal Lahir</Text>}
          {date !== "Tanggal Lahir" && (
            <Text>{moment(date).locale("id").format("DD MMMM YYYY")}</Text>
          )}
        </View>
      </TouchableOpacity>
      <DatePickerInput
        modal
        mode="date"
        locale="id"
        title={`Pilih ${label}`}
        confirmText="Ok"
        cancelText="Batal"
        open={open}
        date={date === "Tanggal Lahir" ? new Date() : date}
        onConfirm={value => {
          setDate(value);
          onChoose(value);
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
}

export default DatePicker;

const styles = StyleSheet.create({
  textLabel: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
  container: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 16,
  },
});
