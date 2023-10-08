import { SET_DEMANDS, ADD_DEMAND, UPDATE_DEMAND, DELETE_DEMAND } from './types';
import { Demand } from '../types/types';

export const setDemands = (demands: Demand) => ({
  type: SET_DEMANDS,
  payload: demands,
});

export const addDemand = (demand: Demand) => ({
  type: ADD_DEMAND,
  payload: demand,
});

export const updateDemand = (demand: Demand) => ({
  type: UPDATE_DEMAND,
  payload: demand,
});

export const deleteDemand = (demandId: Demand) => ({
  type: DELETE_DEMAND,
  payload: demandId,
});
