import { Controller, Get, Param, Post, Body, Put, Delete, NotFoundException, Request, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('posts') // 'posts' endpoint'i
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // Tüm gönderileri al
  @Get()
  async findAll(): Promise<PostModel[]> {
    return this.postsService.findAll();
  }

  // Belirli bir gönderiyi id'ye göre al
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostModel> {
    const post = await this.postsService.findOne(id);
    if (!post) {
      throw new NotFoundException('Gönderi bulunamadı');
    }
    return post;
  }

  // Yeni bir gönderi oluştur
  @UseGuards(AuthGuard)
  @Post()
  async create(@Request() req, @Body() postData: PostModel): Promise<PostModel> {
    postData.userId = req.user.id
    return this.postsService.create(postData);
  }

  // Bir gönderiyi güncelle
  @UseGuards(AuthGuard)
  @Put(':id')
  async update(@Request() req, @Param('id') id: string, @Body() postData: PostModel): Promise<PostModel> {
    postData.userId = req.user.id
    return this.postsService.update(id, postData);
  }

  // Bir gönderiyi sil
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.postsService.remove(id);
  }
}
