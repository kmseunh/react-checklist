import styled from 'styled-components';
import CheckList from './CheckList';
import { CheckListProvider } from './context/CheckListContext';

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 20px;
`;

export function App() {
    return (
        <AppWrapper>
            <CheckListProvider>
                <CheckList />
            </CheckListProvider>
        </AppWrapper>
    );
}

export default App;
