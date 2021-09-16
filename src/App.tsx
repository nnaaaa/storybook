import './App.css'
import { Center, HStack, VStack } from './components/flex'

function App() {
    const data = [1, 2, 3, 4]
    return (
        <Center style={{ width: '100vw', height: '100vh' }}>
            <HStack spacing={10} w={300} justify='center'>
                {data.map((el) => (
                    <Center bg='orange' p={10} w={100} direction='row'>
                        {/* {data.map(elin => <Center style={{ background: 'lightblue' }}>{el+' '+elin}</Center>)} */}
                        {el}
                    </Center>
                ))}
            </HStack>
        </Center>
    )
}

export default App
