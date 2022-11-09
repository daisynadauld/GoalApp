import { useState, React } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

function Goalinput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="none">
    <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} 
        placeholder='Your course goal' 
        onChangeText={goalInputHandler}
        value={enteredGoalText}/>
        <View style={styles.buttonContainer}>
        <View style={styles.Button}>
        <Button title="Add Goal" onPress={addGoalHandler}/>
        </View>
        <View style={styles.Button}>
        <Button title="Cancel" onPress={props.onCancel}/>
        </View>
        </View>
      </View>
      </Modal>
  )
}

export default Goalinput

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC'

  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '100%',
    padding: 8
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  Button: {
    width: '40%',
    marginHorizontal: 8
  }
});