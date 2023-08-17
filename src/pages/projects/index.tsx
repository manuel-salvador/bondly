import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import useProjectList from '@/hooks/useGetProject';
import Spinner from '@/components/Spinner';

export default function ProjectsPage() {
  const { projects } = useProjectList();

  return (
    <MainLayout>
      <div className="p-4">
        <table className="table-fixed w-full border-collapse border border-slate-600">
          <thead>
            <tr>
              <th className="border border-slate-600">Name</th>
              <th className="border border-slate-600">Description</th>
              <th className="border border-slate-600">Organization</th>
              <th className="border border-slate-600">ETH Balance</th>
              <th className="border border-slate-600">USD Balance</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {projects?.map((project, idx) => (
              <tr key={'project-details' + idx}>
                <td className="border border-slate-600">{project?.[0]}</td>
                <td className="border border-slate-600">{project?.[1]}</td>
                <td className="border border-slate-600">{project?.[2]}</td>
                <td className="border border-slate-600">{project?.[3].balanceEth}</td>
                <td className="border border-slate-600">{project?.[3].balanceStable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}
