"use client";

import { List, EditButton, DeleteButton, useTable } from "@refinedev/antd";
import { Table, Space } from "antd";

export default function PortfolioList() {
  const { tableProps } = useTable({ resource: "portfolios", syncWithLocation: true });

  return (
    <List title="Portofolio">
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" width={60} />
        <Table.Column dataIndex="title" title="Judul Proyek" />
        <Table.Column dataIndex="clientName" title="Klien" />
        <Table.Column dataIndex="dateBuilt" title="Selesai"
          render={(v: string) => (v ? new Date(v).toLocaleDateString("id-ID") : "-")} />
        <Table.Column dataIndex="imageUrl" title="Gambar" ellipsis
          render={(v: string | null) => (v ? <a href={v} target="_blank" rel="noreferrer">Lihat</a> : "-")} />
        <Table.Column title="Aksi" width={140}
          render={(_, record: { id: number | string }) => (
            <Space>
              <EditButton hideText recordItemId={record.id} />
              <DeleteButton hideText recordItemId={record.id} />
            </Space>
          )} />
      </Table>
    </List>
  );
}
