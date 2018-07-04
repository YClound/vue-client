<template>
    <div class="main-wrapper dm-flex column">
        <dm-header></dm-header>
        <div class="container-wrapper dm-flex-1">
            <dm-sidebar></dm-sidebar>
            <router-view></router-view>
        </div>
        <dm-footer></dm-footer>
    </div>
</template>

<script>
    import dmHeader from '@/components/header.vue';
    import dmFooter from '@/components/footer.vue';
    import dmSidebar from '@/pages/components/sidebar.vue';

    export default {
        name: 'App',
        components: {dmHeader, dmFooter, dmSidebar}
    };
</script>
