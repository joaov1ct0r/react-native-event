import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { styles } from "./styles"; 
import Participant from "../../components/Participant";
import React, { useState } from "react";

export default function Home() {
  const [participants, setParticipants] = useState(['João'])
  function handleParticipantAdd (name: string) {
    if (participants.includes(name)) {
      return Alert.alert('Erro', 'Participante já cadastrado')
    }

    setParticipants(prevState => [...prevState, 'Ana'])
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name} ?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento.
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de novembro de 2023.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity style={styles.button} onPress={(event) => handleParticipantAdd(event)}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={( { item }) => (
        <Participant name={item} key={item} onRemove={() => handleParticipantRemove(item)}/>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda ? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}