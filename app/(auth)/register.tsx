import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Register = () => {
  const [liquidSalary, setLiquidSalary] = useState("");
  const [investmentType, setInvestmentType] = useState("");
  const [averageInvestment, setAverageInvestment] = useState("");
  const [savings, setSavings] = useState("");
  const [hasCrypto, setHasCrypto] = useState(null);
  const [cryptoInPortfolio, setCryptoInPortfolio] = useState("");

  const handleRegister = () => {
    // Lógica de registro
    alert("Registro exitoso");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CRYPTO</Text>
        <Text style={styles.registerText}>Registro</Text>
      </View>
      <Text style={styles.subtitle}>
        Ingresa tus objetivos y características de inversionista para
        personalizar tus portafolios
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Sueldo líquido"
          value={liquidSalary}
          onChangeText={setLiquidSalary}
        />
        <RNPickerSelect
          onValueChange={(value) => setInvestmentType(value)}
          items={[
            { label: "Alta", value: "alta" },
            { label: "Media", value: "media" },
            { label: "Baja", value: "baja" },
          ]}
          placeholder={{ label: "Tipo de inversión", value: null }}
          style={pickerSelectStyles}
          value={investmentType}
        />
        <TextInput
          style={styles.input}
          placeholder="Monto promedio a invertir"
          value={averageInvestment}
          onChangeText={setAverageInvestment}
        />
        <TextInput
          style={styles.input}
          placeholder="Ahorros"
          value={savings}
          onChangeText={setSavings}
        />
        <View style={styles.row}>
          <Text style={styles.label}>¿Actualmente tienes crypto?</Text>
          <TouchableOpacity
            style={[styles.radioButton, hasCrypto === true && styles.selected]}
            onPress={() => setHasCrypto(true)}
          >
            <View
              style={[styles.radio, hasCrypto === true && styles.radioSelected]}
            />
            <Text style={styles.radioText}>Sí</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioButton, hasCrypto === false && styles.selected]}
            onPress={() => setHasCrypto(false)}
          >
            <View
              style={[
                styles.radio,
                hasCrypto === false && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioText}>No</Text>
          </TouchableOpacity>
        </View>
        {hasCrypto && (
          <RNPickerSelect
            onValueChange={(value) => setCryptoInPortfolio(value)}
            items={[
              { label: "Bitcoin", value: "bitcoin" },
              { label: "Ethereum", value: "ethereum" },
              { label: "Otros", value: "otros" },
            ]}
            placeholder={{ label: "Crypto en portafolio", value: null }}
            value={cryptoInPortfolio}
          />
        )}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#00D16C",
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: "center",
  },
  picker: {
    width: "100%",
    maxWidth: 400,
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  registerText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginVertical: 24,
  },
  form: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#000000",
    marginRight: 8,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
    padding: 4,
  },
  selected: {
    borderWidth: 1,
    borderColor: "#00D16C",
    borderRadius: 4,
  },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    marginRight: 4,
  },
  radioSelected: {
    backgroundColor: "#00D16C",
  },
  radioText: {
    fontSize: 16,
    color: "#000000",
  },
  registerButton: {
    backgroundColor: "#6200EE",
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    color: "black",
    backgroundColor: "#F5F5F5",
    marginBottom: 16,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    color: "black",
    backgroundColor: "#F5F5F5",
    marginBottom: 16,
  },
});

export default Register;
