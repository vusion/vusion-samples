<template>
    <u-linear-layout direction="vertical">
        <u-linear-layout><u-button color="primary" icon="create">创建 Kafka 集群</u-button><u-button square icon="refresh"></u-button></u-linear-layout>
        <u-table-view :data="data">
            <u-table-view-column type="selection"></u-table-view-column>
            <u-table-view-column title="名称" label="name"></u-table-view-column>
            <u-table-view-column title="日期" label="date" type="time"></u-table-view-column>
            <u-table-view-column title="状态" label="status" width="200">
                <template slot-scope="scope">
                    <u-status-icon :name="scope.row.status">{{ scope.row.status | statusName }}</u-status-icon>
                </template>
            </u-table-view-column>
            <u-table-view-column title="地址" label="address"></u-table-view-column>
            <u-table-view-column title="操作" label="action" width="200">
                <template slot-scope="scope">
                    <u-linear-layout>
                        <u-link>设置</u-link>
                        <u-link disabled>删除</u-link>
                        <u-link>更多</u-link>
                    </u-linear-layout>
                </template>
            </u-table-view-column>
        </u-table-view>
        <u-pagination></u-pagination>
    </u-linear-layout>
</template>

<script>
export default {
    filters: {
        statusName(status) {
            const STATUS_NAMES = {
                success: '正常',
                warning: '异常',
                error: '警告',
            };
            return STATUS_NAMES[status];
        },
    },
    data() {
        return {
            data: [{
                date: 1521551897133,
                name: '网易大厦',
                address: '杭州市滨江区网商路599号',
                status: 'success',
                selected: true,
            }, {
                date: 1521551897133,
                name: '英飞特科技园',
                address: '杭州市滨江区江虹路459号',
                status: 'success',
                disabled: true,
            }, {
                date: 1521551897133,
                name: '西可科技园',
                address: '杭州市滨江区秋溢路606号',
                status: 'success',
            }, {
                date: 1521551897133,
                name: '东忠科技园',
                address: '杭州市滨江区长河路590号',
                status: 'warning',
            }],
        };
    },
};
</script>
