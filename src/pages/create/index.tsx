import { BONDLY_CONTRACT } from '@/constants';
import MainLayout from '@/layouts/MainLayout';
import { FormEvent, useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import BondlyAbi from '@/abi.json';

type IValues = {
  name: string;
  description: string;
  organization: string;
  addresses: string | string[];
  threshold: number;
  currency: string;
  slug: string;
};

export default function CreatePage() {
  const [values, setValues] = useState<IValues>({
    name: 'Test Project',
    description: 'Description Project',
    organization: 'Bondly Test',
    addresses:
      '0x7afC2E5D33b9065638C589eE21aD31962dea8f5c, 0xf2D8A74d3e739ba79a0bfdF50dA89361607693F4,0x5fd29a6bbC8f29972b31A3CC2a70bd4580A3C340',
    threshold: 2,
    currency: '0x6f2c4ee43D89b904e62f5F0acF68A37100C968D0',
    slug: '',
  });

  const { config } = usePrepareContractWrite({
    address: BONDLY_CONTRACT,
    abi: BondlyAbi.abi,
    functionName: 'createProject',
    args: [
      values.name,
      values.description,
      values.organization,
      values.name + '-' + values.organization,
      typeof values.addresses === 'string' ? values.addresses.split(',').map((address) => address.trim()) : values.addresses,
      values.threshold,
      values.currency,
    ],
  });

  const { write } = useContractWrite(config);

  const handleChange = (key: string, value: string | number) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    write?.();

    console.log({ values });
  };

  return (
    <MainLayout>
      <form className="flex flex-col gap-8 max-w-xl mx-auto pt-8" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center">Create project</h1>
        <label htmlFor="name" className="flex flex-col gap-2">
          <span>Project name</span>
          <input
            id="name"
            type="text"
            name="name"
            autoComplete="off"
            className="bg-transparent border-2 border-white px-4 py-2"
            onChange={(e) => handleChange('name', e.target.value)}
            value={values.name}
          />
        </label>
        <label htmlFor="description" className="flex flex-col gap-2">
          <span>Description</span>
          <input
            id="description"
            type="text"
            name="description"
            autoComplete="off"
            className="bg-transparent border-2 border-white px-4 py-2"
            onChange={(e) => handleChange('description', e.target.value)}
            value={values.description}
          />
        </label>
        <label htmlFor="organization" className="flex flex-col gap-2">
          <span>Organization</span>
          <input
            id="organization"
            type="text"
            name="organization"
            autoComplete="off"
            className="bg-transparent border-2 border-white px-4 py-2"
            onChange={(e) => handleChange('organization', e.target.value)}
            value={values.organization}
          />
        </label>
        <label htmlFor="addresses" className="flex flex-col gap-2">
          <span>Addresses</span>
          <input
            id="addresses"
            type="text"
            name="addresses"
            autoComplete="off"
            className="bg-transparent border-2 border-white px-4 py-2"
            onChange={(e) => handleChange('addresses', e.target.value)}
            value={values.addresses}
          />
        </label>
        <label htmlFor="threshold" className="flex flex-col gap-2">
          <span>Treshold</span>
          <input
            id="threshold"
            type="number"
            name="threshold"
            autoComplete="off"
            className="bg-transparent border-2 border-white px-4 py-2"
            onChange={(e) => handleChange('threshold', e.target.value)}
            value={values.threshold}
          />
        </label>
        <label htmlFor="currency" className="flex flex-col gap-2">
          <span>Currency</span>
          <select
            name="currency"
            id="currency"
            className="bg-transparent border-2 border-white px-4 py-2"
            onChange={(e) => handleChange('currency', e.target.value)}
            value={values.currency}
          >
            <option value="0x6f2c4ee43D89b904e62f5F0acF68A37100C968D0 " className="bg-black">
              USDT
            </option>
            <option value="0x6f2c4ee43D89b904e62f5F0acF68A37100C968D0 " className="bg-black">
              USDC
            </option>
          </select>
        </label>
        <div>Slug: {values.name + '-' + values.organization}</div>
        <button
          type="submit"
          disabled={!write}
          className="bg-primary self-center px-5 py-2 rounded-md hover:brightness-75 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </MainLayout>
  );
}
