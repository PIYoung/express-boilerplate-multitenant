import { Optional } from 'sequelize';
import * as SQLZ from 'sequelize-typescript';

interface UserInfoAttributes {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

type UserInfoOmitAttributes = 'id' | 'createdAt' | 'updatedAt' | 'deletedAt';
type UserInfoCreationAttributes = Optional<UserInfoAttributes, UserInfoOmitAttributes>;

@SQLZ.Table
export class UserInfo extends SQLZ.Model<UserInfoAttributes, UserInfoCreationAttributes> {
  @SQLZ.PrimaryKey
  @SQLZ.AutoIncrement
  @SQLZ.Column(SQLZ.DataType.INTEGER)
  override readonly id!: number;

  @SQLZ.CreatedAt
  override readonly createdAt!: Date;

  @SQLZ.UpdatedAt
  override readonly updatedAt!: Date;

  @SQLZ.DeletedAt
  override readonly deletedAt!: Date;
}
