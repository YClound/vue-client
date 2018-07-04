<template>
    <div class="main-wrapper">
        <dm-header></dm-header>
        <div class="container-wrapper">
            <router-view name="sidebar"></router-view>
            <router-view></router-view>
        </div>
        <dm-footer></dm-footer>
    </div>
</template>

<script>
    import dmHeader from '@/components/header.vue';
    import dmFooter from '@/components/footer.vue';

    export default {
        name: 'App',
        components: {dmHeader, dmFooter}
    };
</script>
