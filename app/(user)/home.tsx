import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  ListRenderItem,
} from "react-native";

interface Portfolio {
  id: string;
  name: string;
  amount: number;
  profit: number;
  percentage: string;
}

const portfolios: Portfolio[] = [
  {
    id: "1",
    name: "PORTAFOLIO 1",
    amount: 20047.5,
    profit: 203,
    percentage: "1%",
  },
];

interface PortfolioItemProps {
  name: string;
  amount: number;
  profit: number;
  percentage: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  name,
  amount,
  profit,
  percentage,
}) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.amount}>{amount.toFixed(5)} USD</Text>
    <Text style={styles.profit}>{`+${profit.toFixed(2)} (${percentage})`}</Text>
  </View>
);

const HomeScreen: React.FC = () => {
  const renderItem: ListRenderItem<Portfolio> = ({ item }) => (
    <PortfolioItem
      name={item.name}
      amount={item.amount}
      profit={item.profit}
      percentage={item.percentage}
    />
  );

  return (
    <ImageBackground
      source={require("../../assets/images/back_home.png")}
      style={styles.background}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>CRYPTO</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={portfolios}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  list: {
    flexGrow: 1,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    marginBottom: 10,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  amount: {
    fontSize: 18,
    color: "#000",
  },
  profit: {
    fontSize: 18,
    color: "#000",
  },
});

export default HomeScreen;
