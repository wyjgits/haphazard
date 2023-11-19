<template>
	<view class="content">
		<view v-for="(sentence, index) of sentences">
			<view class="sentence-view">
				<text v-for="(word,index) of sentence.en.split(' ')" :key="index" @click="readEn(word)">{{word}}&nbsp;</text>
			</view>
			<br />
			<text>{{sentence.zh}}</text>
			<button size="mini" @click="readEn(sentence.en)">朗读英文</button>
			<button size="mini" @click="readZh(sentence.zh)">朗读中文</button>
			<button size="mini" @click="readEnFrom(index)">从此向后(en)</button>
			<button size="mini" @click="readFrom(index)">从此向后(all)</button>
			<button size="mini" @click="readFrom(index,2)">从此向后(twice)</button>
		</view>
	</view>
</template>

<script>
	import sentences from './sentences.js';
	import {
		readEnglish,
		readZh
	} from '../../utils/audioUtils.js';
	export default {
		data() {
			return {
				sentences
			}
		},
		onLoad() {

		},
		methods: {
			readEn(sentence) {
				readEnglish(sentence);
			},
			readZh(sentence) {
				readZh(sentence);
			},
			async readEnFrom(index) {
				for (let i = index; i < this.sentences.length; i++) {
					await readEnglish(this.sentences[i].en);
				}
			},
			async readFrom(index, time = 1) {
				for (let i = index; i < this.sentences.length; i++) {
					for (let j = 0; j < time; j++) {
						await readZh(this.sentences[i].zh);
						await readEnglish(this.sentences[i].en);
					}
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20rpx;
		gap: 20rpx;
	}
	.sentence-view{
		display: flex;
		flex-wrap: wrap;
		font-size: 1.25rem;
	}
</style>