import { useMemo } from "react";
import { View } from "react-native";

import { Task } from "../../../screens/Home";
import { Counter } from "../../Counter";

import { styles } from "./styles";

type ListHeaderProps = {
  data: Task[]
}

export function ListHeader({ data }: ListHeaderProps) {
  const checkedDataCounter = useMemo(() => {
    const filteredCheckedData = data.filter(item => item.isChecked);

    return filteredCheckedData.length;
  }, [data]);

  return (
    <View style={styles.container}>
      <Counter
        description="Criadas"
        value={data.length}
        isFinished={false}
      />
      <Counter
        description="Concluídas"
        value={checkedDataCounter}
        isFinished
      />
    </View>
  )
}