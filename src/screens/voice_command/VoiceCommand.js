// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/21/2022 => 3:29 PM  *** //


import {useEffect, useState} from 'react';
import Voice, {
    SpeechRecognizedEvent,
    SpeechResultsEvent,
    SpeechErrorEvent,
} from '@react-native-voice/voice';
import styles from './VoiceCommand.styles'
import {Image, Text, TouchableHighlight, View} from 'react-native';
import images from '../../../assets/images';
import IcMic from '../../components/svgs/IcMic';
import IcPause from '../../components/svgs/IcPause';
import {useSelector, useDispatch} from 'react-redux';
import {openYoutube} from '../../features/voice_command/voiceCommandSlice';


export default function VoiceCommand(){
    const voiceCommander = useSelector(state=>state.voiceCommander);
    const dispatch = useDispatch()
    const [recognized, setRecognized] = useState('');
    const [volume, setVolume] = useState('');
    const [error, setError] = useState('');
    const [end, setEnd] = useState(false);
    const [started, setStarted] = useState(false);
    const [results, setResults] = useState([]);
    const [partialResults, setPartialResults] = useState([]);

    useEffect(() => {
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechRecognized = onSpeechRecognized;
        Voice.onSpeechEnd = onSpeechEnd;
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechPartialResults = onSpeechPartialResults;
        Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    const handleInput = (input) => {
        switch (input){
            case 'go to youtube.com':
                dispatch(openYoutube({linkedFeature:'youtube'}));
                break;
        }
    }
    const onSpeechStart = (e: any) => {
        console.log('onSpeechStart: ', e);
        setStarted(true);
    };

    const onSpeechRecognized = (e: SpeechRecognizedEvent) => {
        console.log('onSpeechRecognized: ', e);
        setRecognized('√');
    };

    const onSpeechEnd = (e: any) => {
        console.log('onSpeechEnd: ', e);
        setEnd(true);
    };

    const onSpeechError = (e: SpeechErrorEvent) => {
        console.log('onSpeechError: ', e);
        setError(JSON.stringify(e.error));
    };

    const onSpeechResults = (e: SpeechResultsEvent) => {
        console.log('onSpeechResults: ', e);
        handleInput(e.value);
        setResults(e.value);
    };

    const onSpeechPartialResults = (e: SpeechResultsEvent) => {
        console.log('onSpeechPartialResults: ', e);
        setPartialResults(e.value);
    };

    const onSpeechVolumeChanged = (e: any) => {
        console.log('onSpeechVolumeChanged: ', e);
        setVolume(e.value);
    };

    const _startRecognizing = async () => {
        _clearState();
        try {
            await Voice.start('en-US');
            console.log('called start');
        } catch (e) {
            console.error(e);
        }
    };

    const _stopRecognizing = async () => {
        try {
            await Voice.stop();
            console.log('called stopped');

        } catch (e) {
            console.error(e);
        }
    };

    const _cancelRecognizing = async () => {
        try {
            await Voice.cancel();
        } catch (e) {
            console.error(e);
        }
    };

    const _destroyRecognizer = async () => {
        try {
            await Voice.destroy();
        } catch (e) {
            console.error(e);
        }
        _clearState();
    };

    const _clearState = () => {
        setRecognized('');
        setVolume('');
        setError('');
        setEnd('');
        setStarted('');
        setResults([]);
        setPartialResults([]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.instructions}>
                {'Press the button and start \n speaking.'}
            </Text>
            {/*<Text style={styles.stat}>{`Started: ${started}`}</Text>*/}
            {/*<Text style={styles.stat}>{`Recognized: ${recognized}`}</Text>*/}
            {/*<Text style={styles.stat}>{`Volume: ${volume}`}</Text>*/}
            {/*<Text style={styles.stat}>{`Error: ${error}`}</Text>*/}
            <Text style={styles.stat}>Results</Text>
            {results.map((result, index) => {
                return (
                    <Text key={`result-${index}`} style={styles.stat}>
                        {result}
                    </Text>
                );
            })}
            <Text style={styles.stat}>Partial Results</Text>
            {partialResults.map((result, index) => {
                return (
                    <Text key={`partial-result-${index}`} style={styles.stat}>
                        {result}
                    </Text>
                );
            })}
            {/*<Text style={styles.stat}>{`End: ${end}`}</Text>*/}
            {!started ?<TouchableHighlight onPress={_startRecognizing} style={{backgroundColor:'#1065C0', padding:10, borderRadius:30,margin:20,marginTop:300}}>
                <IcMic/>
            </TouchableHighlight>:
            <TouchableHighlight onPress={_stopRecognizing} style={{backgroundColor:'#420C09', padding:10, borderRadius:30,margin:20}}>
                <IcPause/>
            </TouchableHighlight>}
            {/*<TouchableHighlight onPress={_cancelRecognizing}>*/}
            {/*    <Text style={styles.action}>Cancel</Text>*/}
            {/*</TouchableHighlight>*/}
            {/*<TouchableHighlight onPress={_destroyRecognizer}>*/}
            {/*    <Text style={styles.action}>Destroy</Text>*/}
            {/*</TouchableHighlight>*/}
        </View>
    );
}
