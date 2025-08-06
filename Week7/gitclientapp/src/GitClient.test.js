import axios from 'axios';
import { getRepositories } from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
    test('should return repository names for techiesyed', async () => {
        const dummyRepos = [
            {name: 'repo1' },
            {name: 'repo2' },
            {name: 'awesome-project' }
        ]

        axios.get.mockResolvedValue({ data: dummyRepos})
    })
})

