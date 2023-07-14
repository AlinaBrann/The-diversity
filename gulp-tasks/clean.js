import { deleteAsync } from 'del';
import PATHS from '../paths.js';

const deletedDirectoryPaths = await deleteAsync(PATHS.clean);

export default function clean() {
	return deletedDirectoryPaths;
}
