import CheckList from './CheckList';
import { CheckListProvider } from './context/CheckListContext';

export function App() {
    return (
        <CheckListProvider>
            <CheckList />
        </CheckListProvider>
    );
}

export default App;
