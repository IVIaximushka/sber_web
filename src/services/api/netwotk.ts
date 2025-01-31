import axios from 'axios';
import { getConfigValue } from '@brojs/cli';

const baseUrl = getConfigValue('sber_web.api');

export const network = axios.create({ baseURL: baseUrl });
