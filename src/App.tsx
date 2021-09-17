import './App.css'
import { Center, HStack, VStack } from './components/flex/flex'
import { ImageHoverZoom } from './components/image/image'

function App() {
    const data = [1, 2, 3, 4]
    const imageList = [
        'https://images.unsplash.com/photo-1631831216148-e5d8472dc51c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1631830879682-0e09fcc2ec4f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1631864253263-4f437e334ace?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1631863279986-7a3e6120e1de?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ]
    return (
        <Center w='100vw' h='100vh'>
            <HStack spacing={10}>
                {imageList.map((src) => (
                    <ImageHoverZoom src={src} alt='This is image'/>
                ))}
            </HStack>
        </Center>
    )
}

export default App
