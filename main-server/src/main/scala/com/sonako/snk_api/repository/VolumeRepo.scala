package com.sonako.snk_api.repository

import com.sonako.snk_api.model.{Project, Volume, VolumeInfo}
import scalikejdbc._

//id: Long,
//title: String,
//synopsis: String,
//view: Int,
//cover: String,
class VolumeRepo extends SimpleRepo {
	def getAllVolumesByUser(ownerId: Int): List[VolumeInfo] =
		sql"""SELECT vol_id, project_id, vol_title, vol_synopsis, vol_views, vol_cover
		 FROM volumes WHERE owner_id=${ownerId}"""
		  .map(rs => VolumeInfo(rs)).list().apply()

	def getSharedVolumes(userId: Int): List[VolumeInfo] =
		sql"""SELECT vol_id, project_id, vol_title, vol_synopsis, vol_views, vol_cover FROM volumes
		WHERE vol_id in (SELECT vol_id FROM edit_permission WHERE object_class=1 AND user_id=${userId});
	   """.map(rs => VolumeInfo(rs)).list().apply()

	def getVolListByProject(prjId: Long): List[VolumeInfo] =
		sql"""
			SELECT vol_id, vol_title, vol_synopsis, vol_views, vol_cover
   		FROM volumes
     	WHERE project_id = $prjId
   """.map(rs => VolumeInfo.apply(rs)).list().apply()
}
