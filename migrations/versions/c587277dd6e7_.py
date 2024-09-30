"""empty message

Revision ID: c587277dd6e7
Revises: 71ab2f334a76
Create Date: 2024-09-30 20:47:09.010168

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c587277dd6e7'
down_revision = '71ab2f334a76'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('username', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('fistname', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('lastname', sa.String(), nullable=True))
        batch_op.drop_column('name')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.VARCHAR(), autoincrement=False, nullable=True))
        batch_op.drop_column('lastname')
        batch_op.drop_column('fistname')
        batch_op.drop_column('username')

    # ### end Alembic commands ###
