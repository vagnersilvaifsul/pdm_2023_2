import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import {COLORS} from '../../assets/colors';
import auth from '@react-native-firebase/auth';
import MeuButtom from '../../componentes/MeuButtom';
import Loading from '../../componentes/Loading';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function entrar() {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
      setLoading(false);
      console.log('====================================');
      console.log('logou!!!!!');
      console.log('====================================');
    } catch (error) {
      setLoading(false);
      console.error('SignIn, entrar: ' + error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.divSuperior}>
          <Image
            style={styles.image}
            source={require('../../assets/images/logo.png')}
            accessibilityLabel="logo do app"
          />
          <TextInput
            value={email}
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={t => setEmail(t)}
          />
          <TextInput
            value={password}
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
            keyboardType="default"
            returnKeyType="go"
            onChangeText={t => setPassword(t)}
          />
          <Text
            style={styles.textEsqueceuSenha}
            onPress={() => navigation.navigate('ForgotPassWord')}>
            Esqueceu sua senha?
          </Text>
          <MeuButtom text="ENTRAR" aoClicar={entrar} />
        </View>
        <View style={styles.divInferior}>
          <View style={styles.divOuHr}>
            <View style={styles.divHr} />
            <Text style={styles.textOu}>OU</Text>
            <View style={styles.divHr} />
          </View>
          <View style={styles.divCadastrarSe}>
            <Text style={styles.textNormal}>Não tem uma conta?</Text>
            <Text
              style={styles.textCadastrarSe}
              onPress={() => navigation.navigate('SignUp')}>
              Cadastre-se
            </Text>
          </View>
        </View>
      </ScrollView>
      {loading && <Loading />}
    </SafeAreaView>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  divSuperior: {
    flex: 5,
    alignItems: 'center',
  },
  divInferior: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
  },
  input: {
    width: '95%',
    height: 50,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 2,
    fontSize: 16,
    paddingLeft: 2,
    paddingBottom: 1,
  },
  textEsqueceuSenha: {
    fontSize: 15,
    color: COLORS.accentSecundary,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
  },
  divOuHr: {
    width: '100%',
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divHr: {
    width: '30%',
    height: 1,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 2,
  },
  textOu: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    color: COLORS.grey,
  },
  divCadastrarSe: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textNormal: {
    fontSize: 18,
  },
  textCadastrarSe: {
    fontSize: 16,
    color: COLORS.accentSecundary,
    marginLeft: 5,
  },
});
