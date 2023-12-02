import { useState, useEffect } from 'react';
import apiClient from "../services/api-client";
import {AxiosRequestConfig, CanceledError } from 'axios';


export interface FetchResponse<T> {
    count: number;
    results: T[];
    }


