import { useState, useEffect } from 'react';
import { useContractRead } from 'wagmi';
import BondlyAbi from '@/abi.json';
import { BONDLY_CONTRACT } from '@/constants';

type IProject = [string, string, string, IProjectDetails];
type IProjectDetails = {
  approvalThreshold: number;
  balanceEth: number;
  balanceStable: number;
  balanceStakedEth: number;
  convertedStakedBalance: number;
  id: string;
  owners: string[];
  stableAddress: string;
};

export default function useGetProject() {
  const [project, setProject] = useState<IProject>();
  const [project2, setProject2] = useState<IProject>();
  const [project3, setProject3] = useState<IProject>();

  useContractRead({
    address: BONDLY_CONTRACT,
    abi: BondlyAbi.abi,
    functionName: 'getProjectDetails',
    args: ['Test Project-Bondly Test'],
    onSuccess: (data: string[]) => {
      setProject([
        data[0],
        data[1],
        data[2],
        {
          approvalThreshold: 0,
          balanceEth: 0.0012,
          balanceStable: 0,
          balanceStakedEth: 0,
          convertedStakedBalance: 0,
          id: '',
          owners: [''],
          stableAddress: '',
        },
      ]);
    },
  });

  useContractRead({
    address: BONDLY_CONTRACT,
    abi: BondlyAbi.abi,
    functionName: 'getProjectDetails',
    args: ['slug1'],
    onSuccess: (data: string[]) => {
      setProject2([
        data[0],
        data[1],
        data[2],
        {
          approvalThreshold: 0,
          balanceEth: 0,
          balanceStable: 2000,
          balanceStakedEth: 0,
          convertedStakedBalance: 0,
          id: '',
          owners: [''],
          stableAddress: '',
        },
      ]);
    },
  });

  const { data } = useContractRead({
    address: BONDLY_CONTRACT,
    abi: BondlyAbi.abi,
    functionName: 'getAllProjectHashId',
    args: [2],
  });

  useContractRead({
    address: BONDLY_CONTRACT,
    abi: BondlyAbi.abi,
    functionName: 'getProjectDetailsHash',
    args: [data],
    onSuccess: (data: string[]) => {
      setProject3([
        data[0],
        data[1],
        data[2],
        {
          approvalThreshold: 0,
          balanceEth: 0,
          balanceStable: 2000,
          balanceStakedEth: 0,
          convertedStakedBalance: 0,
          id: '',
          owners: [''],
          stableAddress: '',
        },
      ]);
    },
  });

  return { projects: [project, project2, project3] };
}
