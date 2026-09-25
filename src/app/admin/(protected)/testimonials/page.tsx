"use client";

import { List, EditButton, DeleteButton, useTable } from "@refinedev/antd";
import { Table, Space, Rate } from "antd";

export default function TestimonialList() {
  const { tableProps } = useTable({ resource: "testimonials", syncWithLocation: true });

  return (
    <List title="Testimoni">
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="author" title="Nama" width={140} />
        <Table.Column dataIndex="company" title="Perusahaan" width={180} />
        <Table.Column dataIndex="text" title="Testimoni" ellipsis />
        <Table.Column dataIndex="rating" title="Rating" width={130}
          render={(v: number) => <Rate disabled value={v} style={{ fontSize: 14 }} />} />
        <Table.Column title="Aksi" width={140}
          render={(_, record: { id: string }) => (
            <Space>
              <EditButton hideText recordItemId={record.id} />
              <DeleteButton hideText recordItemId={record.id} />
            </Space>
          )} />
      </Table>
    </List>
  );
}
